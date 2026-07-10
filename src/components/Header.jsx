import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  ['Sobre nós', '#sobre'],
  ['Serviços', '#servicos'],
  ['Soluções', '#laudos'],
  ['Diferenciais', '#diferenciais'],
  ['Contato', '#contato'],
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [onLight, setOnLight] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 42)
      const probeY = 96
      const current = [...document.querySelectorAll('.light-section, .dark-section')].find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= probeY && rect.bottom >= probeY
      })
      setOnLight(Boolean(current?.classList.contains('light-section')))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${onLight ? 'is-on-light' : ''}`}>
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="phone-link" href="tel:+5521975729513">
            <Phone size={21} fill="currentColor" strokeWidth={0} />
            <span>(21) 97572-9513</span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <nav className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Navegação mobile">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
