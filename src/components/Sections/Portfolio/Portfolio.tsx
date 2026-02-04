"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { Project } from "@/lib/types/types";
import s from "./Portfolio.module.css";

const Portfolio = () => {
  const t = useTranslations("Portfolio");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  // Get projects from translations
  const projects = t.raw("projects") as Project[];
  const initialProjectsCount = 3;
  const displayedProjects = showAll ? projects : projects.slice(0, initialProjectsCount);

  // Handle modal opening
  const openModal = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  // Handle modal closing
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  }, []);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen, closeModal]);

  // Handle click outside modal
  const handleBackdropClick = useCallback((event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }, [closeModal]);

  // Toggle show all projects
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Handle hover events
  const handleMouseEnter = useCallback((projectId: number) => {
    setHoveredProjectId(projectId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredProjectId(null);
  }, []);

  return (
    <section id="portfolio" className={s.sectionPortfolio}>
      <div className={`${s.contPortfolio} container`}>
        <h2 className={s.titlePortfolio}>{t("title")}</h2>

        <div className={s.frameList} id="portfolio-projects">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${s.frame} ${s[`frame-${index + 1}`] || ''}`}
              onClick={() => openModal(project)}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
              role="button"
              tabIndex={0}
              aria-label={`Open project details for ${project.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal(project);
                }
              }}
            >
              <div className={s.frameImage}>
                {hoveredProjectId === project.id ? (
                  // Show GIF on hover using img element for animation
                  <img
                    src={project.image}
                    alt={project.name}
                    className={s.projectImage}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  // Show static image by default
                  <Image
                    src={project.staticImage || project.image}
                    alt={project.name}
                    className={s.projectImage}
                    fill 
                    sizes="(max-width: 768px) 276px, (max-width: 1280px) 350px, 380px"
                    loading="lazy"
                  />
                )}
                <div className={s.frameOverlay}>
                  <svg className={s.iconLogo} aria-hidden="true">
                    <use href="/sprite.svg#icon-logo"></use>
                  </svg>
                </div>
              </div>
            </div>
          ))}
   
        </div>

        <div className={s.buttonWrapper}>
          <button
            className={s.button}
            onClick={toggleShowAll}
            {...(showAll ? { "aria-expanded": "true" as const } : { "aria-expanded": "false" as const })}
            aria-controls="portfolio-projects"
          >
            {showAll ? t("hideButton") : t("button")}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className={s.modalBackdrop}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className={s.modalContent}>
            <button
              className={s.modalClose}
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={s.modalBody}>
              <div className={s.modalImage}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className={s.modalProjectImage}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }}
                />
              </div>

              <div className={s.modalInfo}>
                <h3 id="modal-title" className={s.modalTitle}>
                  {selectedProject.name}
                </h3>
                 
                {selectedProject.category && (
                  <span className={s.modalCategory}>
                    {selectedProject.category}
                  </span>
                )}
                <p id="modal-description" className={s.modalDescription}>
                  {selectedProject.description}
                </p>
                <a
                  href={selectedProject.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.modalLink}
                  aria-label={`Visit ${selectedProject.name} website (opens in new tab)`}
                >
                  {t("visitWebsite")}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
