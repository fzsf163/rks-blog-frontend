import { HeartPlus } from 'lucide-react'
import * as React from 'react'

const socials = [
  { logo: '/social-svg/facebook.svg', count: 4191423064, name: 'fb' },
  { logo: '/social-svg/x.svg', count: 735660815, name: 'x' },
  { logo: '/social-svg/insta.svg', count: 59536144, name: 'insta' },
  { logo: '/social-svg/tumbler.svg', count: 87298644, name: 'tumbler' },
  { logo: '/social-svg/pin.svg', count: 814761197, name: 'pin' },
  { logo: '/social-svg/snap.svg', count: 23319583, name: 'snap' },
]
const Socials: React.FC = () => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' })
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 p-2 lg:gap-10 2xl:gap-20">
      {socials.map((s, index) => {
        return (
          <div className="card" key={index}>
            <div>
              <span>
                {' '}
                <div className="m-auto w-fit text-center lg:space-y-5 xl:space-y-7">
                  <div
                    className="svg-logo m-auto size-8 rounded-lg md:size-10 lg:size-14 2xl:size-20"
                    aria-label={s.name}
                  >
                    <img src={s.logo}></img>
                  </div>
                  <div className="flex items-center justify-center gap-1 pt-2 font-bold md:text-2xl">
                    {formatter.format(s.count)}
                    <HeartPlus></HeartPlus>
                  </div>
                </div>
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Socials
