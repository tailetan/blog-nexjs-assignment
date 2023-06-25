export function getPathParam(url) {
    const urlSegment = url.split("/");
    return urlSegment[urlSegment.length - 1];
  }
  