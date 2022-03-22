export const environment = {
  production: true,
  backUrl: 'http://localhost:8080/api/',
  acceptedFiles: '.png, .jpeg, .jpg', // Allowed types of files for upload
  maxFileSize: 5000000, // Is equivalent to 5Mo
  tokenExpirationDelay: 864000000, // Is equivalent to 24 hours, same as back server
};