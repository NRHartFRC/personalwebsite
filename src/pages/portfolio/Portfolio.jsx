import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ProjectList from "../../components/ProjectList";

// ProjectHeader for portfolio items
import ProjectHeader from "../../components/ProjectHeader";

// Carousel using react-image-gallery
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import carouselPhotos from "../../components/CarouselPhotos";

// Masonry album using react-photo-album
import PhotoAlbum from "react-photo-album";
import photos from "../../components/MasonryPhotos";

// Button functionaltiy
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

/**
 * Represents the Portfolio page component.
 * Displays a list of projects and allows users to view the creator's work.
 *
 * @component
 */

const Portfolio = () => {
  // Get the current location using React Router's useLocation hook
  const location = useLocation();

  // Scroll to the top of the page when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);  

  return (
    <>
      {/* Main Portfolio Page */}
      <main className="portfolio container">
        {/* Display the page header */}
        <PageHeader title="Portfolio" description="View my digital work" />

        {/* Display the list of projects */}
        <div className="row">
          <ProjectList />
        </div>
        &nbsp;

        {/* Display the react-image-gallery carousel  */}
        <ProjectHeader title="Machines & Fixtures" description="view my physical work portfolio" />
        <div className="row">
          <Gallery items={carouselPhotos} />
        </div>
        &nbsp;

        {/* Display the react-photo-album */}
        <ProjectHeader title="Overview" description="projects at a glance" />
        <div className="row">
          <PhotoAlbum layout="masonry" photos={photos} />
        </div>
        &nbsp;

        {/* Buttons to navigate */}
        <div style={{ display: "flex", gap: "10px", opacity: 1, transform: "none" }}>
          {/* Button to return to top */}
          <NavLink to="/portfolio" style={{ display: "flex", gap: "10px", opacity: 1, transform: "none" }}>
            <Button name="Return to Top" />
          </NavLink>
          {/* Button to view the resume */}
          <NavLink to="/resume" style={{ display: "flex", gap: "10px", opacity: 1, transform: "none" }}>
            <Button name="Jump to Resume" />
          </NavLink>
        </div>
        &nbsp;
      </main>
    </>
  );
};

export default Portfolio;
