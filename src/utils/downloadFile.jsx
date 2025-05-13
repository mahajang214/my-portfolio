// utils/downloadFile.js
export function downloadDocument(fileUrl, fileName) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName); // Suggests the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  