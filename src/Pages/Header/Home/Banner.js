import React from 'react';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <img
        src="https://www.a2itsoft.com/public/uploads/1606733803.png"
        className="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--K01GSklS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lrt7fstug7vjaj543pe4.jpeg"
        className="block w-full"
        alt="Camera"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://i0.wp.com/www.zooinfotech.com/wp-content/uploads/2021/06/The-Complete-Node.js-Developer-Course.jpeg?fit=1000%2C407&ssl=1"
        className="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;