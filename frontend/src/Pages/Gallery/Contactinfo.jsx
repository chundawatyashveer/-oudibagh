import React from 'react'
import pic1Thumb from '../../assets/images/gallery/GalleryS-1.PNG';
import pic1 from '../../assets/images/gallery/GalleryB-1.PNG';
import pic2Thumb from '../../assets/images/gallery/GalleryS-2.jpeg';
import pic2 from '../../assets/images/gallery/GalleryB-2.jpeg';
import pic3Thumb from '../../assets/images/gallery/GalleryS-3.JPG';
import pic3 from '../../assets/images/gallery/GalleryB-3.JPG';
import pic4Thumb from '../../assets/images/gallery/GalleryS-4.JPG';
import pic4 from '../../assets/images/gallery/GalleryB-4.JPG';
import pic5Thumb from '../../assets/images/gallery/GalleryS-5.jpeg';
import pic5 from '../../assets/images/gallery/GalleryB-5.jpeg';
import pic6Thumb from '../../assets/images/gallery/GalleryS-6.jpeg';
import pic6 from '../../assets/images/gallery/GalleryB-6.jpeg';
import pic7Thumb from '../../assets/images/gallery/GalleryS-7.JPG';
import pic7 from '../../assets/images/gallery/GalleryB-7.JPG';
import pic8Thumb from '../../assets/images/gallery/GalleryS-8.JPG';
import pic8 from '../../assets/images/gallery/GalleryB-8.JPG';
import pic9Thumb from '../../assets/images/gallery/GalleryB-9.jpg';
import pic9 from '../../assets/images/gallery/GalleryS-9.jpg';
import pic10Thumb from '../../assets/images/gallery/GalleryS-10.jpg';
import pic10 from '../../assets/images/gallery/GalleryB-10.jpg';

const Contactinfo = () => {
  return (
    <section className="gallery-page section-kt">
  <div className="auto-container">
    <div className="row clearfix">
      <div className="masonry">
        <div className="masonry-item">
          <a
            href={pic1}
            className="fancybox"
            data-fancybox="gallery"
          >
            <img src={pic1Thumb} alt= {pic1Thumb} />
          </a>
        </div>
        <div className="masonry-item">
          <a
            href={pic4}
            className="fancybox"
            data-fancybox="gallery"
          >
            <img src={pic4Thumb} alt={pic4Thumb} />
          </a>
        </div>
        <div className="masonry-item">
          <a
            href={pic3}
            className="fancybox"
            data-fancybox="gallery"
          >
            <img src={pic3Thumb} alt={pic3Thumb}/>
          </a>
        </div>
        <div className="masonry-item">
          <a
            href={pic7}
            className="fancybox"
            data-fancybox="gallery"
          >
            <img src={pic7Thumb} alt={pic7Thumb} />
          </a>
        </div>
        <div className="masonry-item">
          <a
            href={pic5}
            className="fancybox"
            data-fancybox="gallery"
          >
            <img src={pic5Thumb} alt={pic5Thumb} />
          </a>
        </div>
        <div className="masonry-item">
          <a
            href={pic6}
            className="fancybox"
            data-fancybox="gallery"
          >
            <img src={pic6Thumb} alt={pic6Thumb} />
          </a>
        </div>
        <div className="masonry-item">
          <a
            href={pic2}
            className="fancybox"
            data-fancybox="gallery"
          >
            <img src={pic2Thumb} alt={pic2Thumb} />
          </a>
        </div>
        <div className="masonry-item">
          <a
            href={pic8}
            className="fancybox"
            data-fancybox="gallery"
          >
            <img src={pic8Thumb} alt={pic8Thumb} />
          </a>
        </div>
        <div className="masonry-item">
          <a
            href={pic9}
            className="fancybox"
            data-fancybox="gallery"
          >
            <img src={pic9Thumb} alt={pic9Thumb} />
          </a>
        </div>
        <div className="masonry-item">
          <a
            href={pic10}
            className="fancybox"
            data-fancybox="gallery"
          >
            <img src={pic10Thumb} alt={pic10Thumb} />
          </a>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  </div>
</section>

  )
}

export default Contactinfo

