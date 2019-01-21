/**
 * This function allows the buffer multipart content to be generated.
 *
 * @param {string} boundary - Boundary of the request.
 * @param {Array} files - Array of the objects with files to generate multipart body.
 * @param {string} files[].fieldname - The field name
 * @param {string} files[].fileName - The name of the file.
 * @param {string} files[].contentType - The content type of the file
 * @param {Buffer} files[].buffer - Buffer of the file.
 *
 * @returns {Buffer} Returns the buffer with multipart data.
 */
function generateBodyMultipart(boundary, files = []) {
  const arrBuffer = [];
  
  files.forEach(function(file) {
    let data = "";
    data += "--" + boundary;
    data += "\r\n";
    data +=
      'Content-Disposition: form-data; name="' +
      file.fieldName +
      '"; filename="' +
      file.fileName +
      '"';
    data += "\r\n";
    data += "Content-Type: " + file.contentType;
    data += "\r\n\r\n";

    arrBuffer.push(Buffer.from(data, "utf8"));
    arrBuffer.push(file.buffer);
  });

  arrBuffer.push(Buffer.from("\r\n--" + boundary + "--\r\n", "utf8"));

  return Buffer.concat(arrBuffer);
}
