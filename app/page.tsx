import { BlogPosts } from 'app/components/posts'
import Photo from 'app/components/photo'
import Divider from './components/divider'
import ToggleTheme from './components/toggle_btn'
import personal from './i18n/personal_info.json'
import SectionHeader from './components/section_header'
import Icon from './components/icon'

let lang = 'en'

function loadTheme() {
  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('theme')
    console.log(theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }
}

let personal_info = personal[lang]

export default function Page() {
  return (
    <section>
      <div className="flex mb-8">
        <Photo className="mr-6 rounded-lg object-cover object-top w-full h-full" alt="headshot" />
        <section>
          <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
            {personal_info.name}
          </h1>
          <p className='mb-4'> {personal_info.title} </p>
          <p className="mb-4">
            {personal_info.introduce}
          </p>
          <div className='flex'>
            <Icon
              href="https://www.linkedin.com/in/yang-han-cheng-03036179/"
              src="/linkedin.png"
              alt="linked"
            />
            <Icon
              href="https://github.com/adagio130/"
              src="/github.png"
              alt="github"
            />
          </div>
        </section>
      </div>
      <div className="my-8">
        <SectionHeader title="Skills" />
        {/* <Skills list={personal_info.skills} /> */}
        <Divider />
        <SectionHeader title="Employement Experiences" />
        <Divider />
        <SectionHeader title="Educations" />
        <Divider />
        {/* <BlogPosts /> */}
      </div>
    </section>
  )
}
