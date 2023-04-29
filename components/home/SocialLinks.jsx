import {
  SiGithub,
  SiLeetcode,
  SiLinkedin,
  SiTwitter
} from 'react-icons/si'
import CustomLink from '../utils/CustomLink'
const SocialLinks = () => {
  return (
    <>
      <a href="https://github.com/shyamenk/">
        <SiGithub className="w-6 h-6 cursor-pointer" />
      </a>
      <a href="https://www.linkedin.com/in/shyamenk/">
        <SiLinkedin className="w-6 h-6 cursor-pointer" />
      </a>
      <a href="https://twitter.com/shyamenk">
        <SiTwitter className="w-6 h-6 cursor-pointer" />
      </a>
      <a href="https://leetcode.com/shyamenk/">
        <SiLeetcode className="w-6 h-6 cursor-pointer" />
      </a>
    </>
  )
}

export default SocialLinks
