import * as yup from 'yup';

export const memberValidationSchema = yup.object().shape({
  name: yup.string().required(),
  company_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
