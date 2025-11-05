import { ArrowRightIcon, MailIcon } from 'lucide-react'
import './footer.css'

export default function Footer() {
  return (
    <div className="footer-bg k2d-bold h-full space-y-9 py-10 text-white sm:h-100 sm:space-y-20">
      <div className="m-auto flex w-fit flex-col items-start justify-evenly gap-5 sm:w-full sm:gap-0 md:flex-row lg:items-center">
        {/* roksana */}
        <div className="flex flex-col items-start justify-center gap-2 capitalize">
          <p className="md:text-xl lg:text-3xl xl:text-4xl"> &copy;Rokasana</p>
          <p className="ml-1 text-white/50 md:text-lg lg:text-xl">
            {' '}
            inspiring always
          </p>
        </div>
        {/* socials */}
        <div className="flex flex-col items-start justify-center gap-2 capitalize">
          <p className="md:text-xl lg:text-3xl xl:text-4xl">Socials</p>
          <div className="flex flex-col items-start justify-center gap-2 md:text-lg lg:flex-row lg:items-center lg:text-xl">
            <p className="flex cursor-pointer items-center justify-center">
              {' '}
              <span>
                <ArrowRightIcon className="size-8" />
              </span>
              facebook
            </p>
            <p className="flex cursor-pointer items-center justify-center">
              {' '}
              <span>
                <ArrowRightIcon className="size-8" />
              </span>
              instagram
            </p>
            <p className="flex cursor-pointer items-center justify-center">
              <span>
                <ArrowRightIcon className="size-8" />
              </span>
              youtube
            </p>
          </div>
        </div>
        {/* say hello */}
        <div className="flex flex-col items-start justify-center gap-2 capitalize">
          <p className="flex items-center justify-center gap-1 md:text-xl lg:text-3xl xl:text-4xl">
            <span>
              <MailIcon className="size-5 sm:mt-1 lg:size-[2.1rem]"></MailIcon>
            </span>
            Say Hello!
          </p>
          <p className="flex cursor-pointer items-center justify-center text-sm sm:text-xl">
            {' '}
            <span>
              <ArrowRightIcon className="size-8" />
            </span>{' '}
            info@makeherfly.com
          </p>
        </div>
      </div>
      <p className="footer-text pointer-events-none text-center text-4xl select-none sm:mt-12 sm:pr-20 sm:text-right sm:font-bold md:text-7xl lg:text-8xl xl:text-9xl">
        Make Her Fly
      </p>
    </div>
  )
}
