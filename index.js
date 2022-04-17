const row = document.getElementById('row');
const response = axios.get('https://picsum.photos/v2/list').then((res) =>
  res.data.forEach((image, index) => {
    row.innerHTML += `
<div class="col-12 col-sm-6 col-md-4 mx-auto my-4">
<div class="card">
  <img
    src="${image.download_url}"
    alt=""
    class="card-img-top"
  />
  <div class="card-body text-center">
    <p>${image.author}</p>
    <a href="${image.download_url}" class="btn btn-sm btn-primary">Download</a>
  </div>
</div>
</div>
`;
  })
);
