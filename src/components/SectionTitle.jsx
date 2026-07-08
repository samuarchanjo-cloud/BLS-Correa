function SectionTitle({ eyebrow, title, children, align = 'left' }) {
  return (
    <div className={`section-title section-title-${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  )
}

export default SectionTitle
