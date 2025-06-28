import { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
import { FiEdit, FiUpload } from "react-icons/fi";

// Hidden input
const HiddenFileInput = styled.input.attrs({ type: "file", multiple: true })`
  display: none;
`;

// Wrapper for all file boxes
const UploadBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

// Each file/item box
const UploadBox = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  border: 2px dashed ${({ dangerBorder }) => (dangerBorder ? "red" : "#d1d5db")};
  border-radius: 8px;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 5px;

  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    font-size: 1.3rem;
    text-decoration: underline;
  }

  span {
    font-size: 12px;
    color: #6b7280;
    text-align: center;
    padding: 4px;
  }
`;

// Button to remove a file
const RemoveButton = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: red;
  color: white;
  border: none;
  padding: 2px 5px;
  border-radius: 4px;
  font-size: 10px;
  cursor: pointer;

  &:hover {
    background: darkred;
  }
`;

// File type map
const fileTypeMap = {
  pdf: "application/pdf",
  excel:
    "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  image: "image/png, image/jpeg, image/jpg",
  doc: "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  other: "*",
};

function FilesInput({ control, name, documentType }) {
  const [acceptedTypes, setAcceptedTypes] = useState(fileTypeMap.other);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const {
    field: { onChange, onBlur, ref, value },
  } = useController({ name, control });

  useEffect(() => {
    setAcceptedTypes(fileTypeMap[documentType] || fileTypeMap.other);
  }, [documentType]);

  useEffect(() => {
    if (Array.isArray(value)) {
      const withPreview = value.map((file) => {
        if (
          file instanceof File &&
          file.type?.startsWith("image/") &&
          !file.previewUrl
        ) {
          file.previewUrl = URL.createObjectURL(file);
        }
        return file;
      });
      setSelectedFiles(withPreview);
    }
  }, [value]);

  useEffect(() => {
    return () => {
      selectedFiles.forEach((file) => {
        if (file.previewUrl) URL.revokeObjectURL(file.previewUrl);
      });
    };
  }, [selectedFiles]);

  const handleChange = (e) => {
    const files = Array.from(e.target.files).map((file) => {
      if (file.type.startsWith("image/")) {
        file.previewUrl = URL.createObjectURL(file);
      }
      return file;
    });

    const updated = [...selectedFiles, ...files];
    setSelectedFiles(updated);
    onChange(updated);
  };

  const removeFile = (index) => {
    const removedFile = selectedFiles[index];
    if (removedFile?.previewUrl) {
      URL.revokeObjectURL(removedFile.previewUrl);
    }
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onChange(newFiles);
  };

  const triggerInput = () => {
    const input = document.getElementById(name);
    if (input) input.click();
  };

  return (
    <div>
      <UploadBoxWrapper>
        {selectedFiles.map((file, index) => (
          <UploadBox key={index}>
            {file.type?.startsWith("image/") && file.previewUrl ? (
              <img src={file.previewUrl} alt="Preview" />
            ) : (
              <span>{file.name || "File"}</span>
            )}
            <RemoveButton onClick={() => removeFile(index)}>
              Remove
            </RemoveButton>
          </UploadBox>
        ))}

        {/* Always visible upload box */}
        <UploadBox onClick={triggerInput}>
          <FiUpload />
          <p>Upload File</p>
        </UploadBox>
      </UploadBoxWrapper>

      <HiddenFileInput
        id={name}
        accept={acceptedTypes}
        onChange={handleChange}
        onBlur={onBlur}
        ref={ref}
      />
    </div>
  );
}

export default FilesInput;
