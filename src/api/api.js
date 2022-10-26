export const get = async (url, token) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Authorization': token, 'Content-Type': 'application/json; charset=UTF-8' },
  });
  return await res.json();
};

export const post = async (url, body, token) => {
  const res = await fetch(url, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: { 'Authorization': token, 'Content-Type': 'application/json; charset=UTF-8' },
  });
  if (res.ok) {
    return await res.json();
  }
  throw new Error(await res.json().error);
};

export const put = async (url, body, headers) => {
  const res = await fetch(url, {
    body: JSON.stringify(body),
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json; charset=UTF-8' },
  });
  return await res.json();
};

export const deleteRequest = async (url, headers) => {
  const res = fetch(url, {
    method: 'DELETE',
    headers: { ...headers, 'Content-Type': 'application/json; charset=UTF-8' },
  });
  return await res.json();
};
