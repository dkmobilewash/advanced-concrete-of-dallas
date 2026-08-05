export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export const COMPANY = {
  name: 'Plano Concrete Solutions',
  phone: '(214) 751-8014',
  phoneHref: 'tel:+12147518014',
  email: 'info@planoconcretesolutions.com',
  hours: 'Mon–Sat 7am–6pm',
  address: 'Plano, TX',
  siteUrl: 'https://planoconcretesolutions.com',
}
