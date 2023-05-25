import React, { useEffect, useRef, useState } from "react";
import "./ResumeCard.css";
import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";

const ResumeCard = ({
  title,
  subTitle,
  result,
  des,
  link,
  imageAltText,
  demoButtonText,
  githubButtonText,
}) => {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create a sphere geometry for our "God"
    const godGeometry = new THREE.SphereGeometry(5, 32, 32);
    const godMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const god = new THREE.Mesh(godGeometry, godMaterial);
    scene.add(god);

    // Add some ambient lighting to the scene
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Add a directional light to the scene to create shadows
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-10, 10, 5);
    scene.add(directionalLight);

    // Set up mouse and touch controls for the scene
    const trackballControls = new TrackballControls(
      camera,
      renderer.domElement
    );
    const touchTrackballControls = new TrackballControls(
      camera,
      renderer.domElement
    );

    // Animate the God by rotating it slightly every frame
    function animate() {
      requestAnimationFrame(animate);
      god.rotation.x += 0.01;
      god.rotation.y += 0.01;
      trackballControls.update();
      touchTrackballControls.update();
      renderer.render(scene, camera);
    }

    // Handle errors during initialization
    try {
      animate();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setHasError(true);
    }

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className=" card-wrapper perspective">
    <div className="card-container relative w-full h-full transform-style-preserve-3d transition-all duration-500">
      <div className="card-inner absolute w-full h-full  rounded-lg shadow-md">
        <div className="card-front absolute w-full h-full flex flex-col justify-center items-center text-center px-4 py-8 transform rotate-y-0">
          {isLoading ? (
            <div classNameName="loading-spinner"></div>
          ) : hasError ? (
            <p className="text-sm md:text-base lg:text-lg text-white">
              An error occurred while initializing the 3D scene. Please try
              refreshing the page.
            </p>
          ) : (
            <>
              <img
                className="w-[100%] h-[70%] object-cover border border-b-pink-50 rounded-t-lg"
                src={link}
                alt={imageAltText}
              />
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4 hover:text-blue-500 transition-colors duration-300 text-white">
                {subTitle}
              </h1>
            </>
          )}
        </div>
  
        <div className="card-back absolute w-full h-full bg-white rounded-lg shadow-md text-center px-4 py-8 transform rotate-y-180">
          <div className="title-section mb-4">
            <h2 className="title text-base md:text-lg lg:text-xl font-bold animate-pulse truncate">
              {title}
            </h2>
            <p className="description text-sm md:text-base lg:text-lg text-gray-700">
              {des}
            </p>
          </div>
          <div ref={containerRef} className="mt-4"></div>
          <div className="button-section flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 md:space-x-4 mt-6">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transform hover:-translate-y-1 transition-all duration-300 max-w-max truncate"
            >
              {demoButtonText || "Demo"}
            </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full transform hover:-translate-y-1 transition-all duration-300 max-w-max truncate"
            >
              {githubButtonText || "GitHub"}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ResumeCard;
