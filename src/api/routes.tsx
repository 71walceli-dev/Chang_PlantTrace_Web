export const Endpoints = {
  //BaseURL: "https://victoria-api.up.railway.app",
  BaseURL: process.env.NODE_ENV === 'production' ? 'https://victoria-api.up.railway.app/' : 'https://b062-157-100-158-182.ngrok-free.app',
  //BaseURL:'https://conautec.conauto.com.ec:444',
  Api: "/api",
  login: "/auth/login/",
  //login: '/cuentas/login/',

  register: "/auth/register/",
  Token: "/auth/refresh/",
  Poligonos: "/geolotes/",
  perfil: "/auth/porfile/",
  Lectura: "/lecturas/",
  Plantas: "/plantas/",
};
