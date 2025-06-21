import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import CategoryRow from "./CategoryRow";
import { CATEGORIES_HEADS } from "../../data/gridKeys";
import { categoriesServices } from "../../data/api";
import { useFetch } from "../../hooks/useFetch";

function CategoriesTable() {
  const { data: { results, count } = {}, isLoading } = useFetch({
    service: categoriesServices.getAll,
    key: "categories",
  });
  return (
    <>
      <GenericTable
        headers={CATEGORIES_HEADS}
        data={results}
        renderRow={renderRow(CategoryRow)}
        pageSize={20}
        resaultsCount={count}
        isLoading={isLoading}
      />
    </>
  );
}

export default CategoriesTable;
