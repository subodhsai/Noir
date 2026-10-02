export const brand = { name: 'NOIR', tagline: 'Spaces for the moments worth gathering for.', location: 'New York / London', concept: 'A fictional studio concept for a design portfolio.' };
export const nav = [{ label: 'Work', href: '/#work' }, { label: 'Services', href: '/services' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }];
export const services = [
 { title: 'PRIVATE CELEBRATIONS', text: 'Intimate dinners and milestone gatherings shaped around the people at their center.', image: 'photo-1519167758481-83f550bb49b3', alt: 'Warmly lit private dining room prepared for an evening gathering' },
 { title: 'WEDDINGS', text: 'A considered setting for a day that feels entirely your own.', image: 'photo-1519741497674-611481863552', alt: 'Soft evening light across an outdoor wedding table' },
 { title: 'BRAND EXPERIENCES', text: 'Physical expressions of a point of view, made for people to encounter together.', image: 'photo-1511795409834-ef04bbd61622', alt: 'Sculptural event lighting inside a dark hall' },
 { title: 'CULTURAL EVENTS', text: 'Gatherings for ideas, art and the conversations that follow.', image: 'photo-1511795409834-ef04bbd61622', alt: 'Architectural interior arranged for a cultural gathering' }
];
export const imageUrl = (id: string, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

