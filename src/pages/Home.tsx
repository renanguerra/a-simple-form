import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import { Formik } from "formik";
import Input from "components/Input";
import { INVALID_FORMAT, REQUIRED_LABEL } from "utils/validators";
import { PhoneFormat } from "utils/cleaveMasks";
import { toast } from "react-toastify";
import LogoImage from "../assets/images/logo.png";

interface FormProps {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const initialValues: FormProps = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const Homepage = () => {
  const FormSchema = yup.object().shape({
    name: yup
      .string()
      .required(REQUIRED_LABEL)
      .min(5, "O nome precisa ter ao menos 5 caracteres"),
    email: yup.string().required(REQUIRED_LABEL).email(INVALID_FORMAT),
    phone: yup.string().required(REQUIRED_LABEL),
    password: yup
      .string()
      .required(REQUIRED_LABEL)
      .min(8, "A senha precisa ter ao menos 8 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não conferem")
      .required(REQUIRED_LABEL),
  });

  const handleSubmit = async (values: FormProps) => {
    toast.success("Usuário cadastrado com sucesso!");
  };

  return (
    <Container>
      <ImageLogo src={LogoImage} alt="logo" />

      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormProps, { resetForm }) => {
          handleSubmit(values);
          resetForm({ values: initialValues });
        }}
        validationSchema={FormSchema}
        validateOnMount
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        }) => {
          return (
            <FormContainer onSubmit={handleSubmit}>
              <Input
                label="Nome:"
                placeholder="Insira seu nome aqui"
                value={values.name}
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
                error={touched.name && errors.name ? errors.name : undefined}
                name="name"
              />

              <Input
                label="Email:"
                placeholder="Insira seu email aqui"
                value={values.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                error={touched.email && errors.email ? errors.email : undefined}
                name="email"
              />

              <Input
                label="Telefone:"
                placeholder="Insira seu telefone aqui"
                mask={PhoneFormat}
                value={values.phone}
                onChange={handleChange("phone")}
                onBlur={handleBlur("phone")}
                error={touched.phone && errors.phone ? errors.phone : undefined}
                name="phone"
              />

              <Input
                label="Senha:"
                placeholder="Insira sua senha"
                type={"password"}
                value={values.password}
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                error={
                  touched.password && errors.password
                    ? errors.password
                    : undefined
                }
                name="password"
              />

              <Input
                label="Confirmar senha:"
                placeholder="Confirme sua senha"
                type={"password"}
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : undefined
                }
                name="confirmPassword"
              />

              <Button type="submit" disabled={!isValid}>
                Salvar
              </Button>
            </FormContainer>
          );
        }}
      </Formik>
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8397b9;
  font-family: "Inter";
`;

const ImageLogo = styled.img`
  margin-right: 50px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const FormContainer = styled.form`
  max-width: 500px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const Button = styled.button`
  margin-top: 30px;
  height: 38px;
  width: 180px;
  border-radius: 100px;
  outline: none;
  border: none;
  background: #00d37f;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
  transition: ease-in 0.2s;

  :hover {
    background: #00bb70;
  }
  :disabled {
    background: gray;
  }
`;
