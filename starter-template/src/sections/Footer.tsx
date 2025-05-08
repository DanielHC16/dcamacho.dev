import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import LinkedInIcon from '@/assets/icons/icons8-linkedin.svg';
import FacebookIcon from '@/assets/icons/icons8-facebook.svg';
import GitHubIcon from '@/assets/icons/icons8-github.svg';
import InstagramIcon from '@/assets/icons/icons8-instagram.svg';

const footerLinks = [
  {
    href: 'https://www.linkedin.com/in/danielcamacho777/',
    iconType: LinkedInIcon,
  },
  {
    href: 'https://github.com/DanielHC16',
    iconType: GitHubIcon, 
  },
  {
    href: 'https://www.facebook.com/hardy.0777',
    iconType: FacebookIcon,
  },
  {
    href: 'https://www.instagram.com/dear.dnl/',
    iconType: InstagramIcon,
  },
]

export const Footer = () => {
  return ( 
    <footer>
    <div className="container">
    <div className="border-t border-black/15 py-6 text-sm flex flex-col items-center">
      <div className="text-amber-400">&copy; 2025. All rights reserved.</div>
      <nav className="flex flex-row items-center gap-8 mt-4">
        {footerLinks.map((link, index) => (
          <a 
            href={link.href} 
            key={index} 
            className="p-2 rounded-full hover:bg-amber-500/10 transition-all duration-300"
          >
            <link.iconType 
              className="w-8 h-8 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]" 
            />
          </a>
        ))}
      </nav>
      </div>
    </div>
    </footer>
  );
};
