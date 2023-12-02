export const Endpoints = {
  //BaseURL: 'https://b706-157-100-158-182.ngrok-free.app',
  //BaseURL: 'http://localhost:8000',
  //BaseURL:'https://victoria-api.up.railway.app',
  BaseURL: process.env.REACT_APP_API,
  
  //BaseURL:'http://127.0.0.1:8000',
  Api: "/api",
  login: "/auth/login/",
  register: "/auth/register/",
  Token: "/auth/refresh/",
  perfil: "/auth/porfile/",
  lotes: "/lotes/",
  Poligonos: "/geolotes/",
  Lectura: "/lecturas/",
  Plantas: "/plantas/",
  WeatherData:'/weather/data/',
  ImportUsers:'/auth/register/import',
  Users:'/auth/users',
  Roles:'/auth/roles',
  Produccion: "/produccion/",
  Upload:"upload",
};
