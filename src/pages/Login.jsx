import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";

export const AuthLayout = styled.main`
  min-height: 100vh;
  display: grid;
  background-color: red;
  grid-template-columns: 52rem;
  align-content: center;
  justify-content: center;
  background-color: var(--color-grey-50);
  & form {
    box-shadow: var(--shadow-md);
    padding: 20px 35px 60px 35px;
  }
`;

function Login() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;
