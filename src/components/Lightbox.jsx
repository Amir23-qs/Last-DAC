import { useEffect } from 'react'

export default function Lightbox({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="lightbox active" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <button className="close-lb" onClick={onClose}>✕</button>
      <div className="lb-caption">{project.title} — {project.category}</div>
    </div>
  )
}
