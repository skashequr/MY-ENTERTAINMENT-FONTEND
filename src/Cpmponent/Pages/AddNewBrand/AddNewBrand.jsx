import Swal from 'sweetalert2'
const AddNewBrand = () => {
  const handleCategories = (e) => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const dis = e.target.dis.value;
    const link = e.target.link.value;
    const categorie = {
        brand,
        dis,
        link
    };

    console.log(categorie);

    fetch("https://back-end-nine-lake.vercel.app/categorie", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categorie)
    })
    .then((res) => {
        if (res.ok) {
            e.target.reset();
            return res.json(); // Parse JSON response if needed
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then((data) => {
        // Handle data if needed
        Swal.fire({
            title: 'Success!',
            text: 'Your data has been submitted successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    })
    .catch((error) => {
        // Handle error
        Swal.fire({
            title: 'Error!',
            text: 'There was an error submitting your data',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        console.error(error);
    });
}

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleCategories} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Img Link</span>
          </label>
          <input type="text" name="link" placeholder="Brand Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Discription</span>
          </label>
          <input type="text" name="dis" placeholder="Write Some discription" className="input input-bordered input-lg h-28 w-full max-w-xs" />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddNewBrand;