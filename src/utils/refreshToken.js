// Definir la función parseToken para analizar el token JWT
export const parseToken = (token) => {
    const tokenParts = token.split('.');
  
    // Obtener la parte del payload del token
    const payloadBase64 = tokenParts[1];
  
    // Decodificar la parte del payload de Base64 a JSON
    const payload = JSON.parse(atob(payloadBase64));
  
    return payload;
};
  
export const startLogoutTimer = (expirationTime)  => {
    const currentTime = Math.floor(Date.now() / 1000); // Obtener el tiempo actual en segundos
    const timeRemaining = expirationTime - currentTime; // Calcular el tiempo restante en segundos
    // Verificar si el tiempo restante es mayor a cero y programar el cierre de sesión
    if (timeRemaining > 0) {
      setTimeout(logout, timeRemaining * 1000); // Convertir el tiempo restante a milisegundos y programar el cierre de sesión
    } else {
      logout(); // El tiempo de expiración ya ha pasado, cerrar sesión inmediatamente
    }
}
  
const logout = () => {
    localStorage.clear()
    location.reload();

}