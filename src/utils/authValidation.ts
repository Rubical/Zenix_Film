export const validateEmail = (mail: string): boolean => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
};

export const validatePassword = (password: string): boolean => {
  return /^([a-zA-Z0-9_-]){6,200}$/.test(password);
};
