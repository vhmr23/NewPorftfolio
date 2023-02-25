type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Image extends Base {
    _type: 'image';
    reference: Reference
}

interface Reference extends Base {
    _type: 'reference';
    _ref: string;
}

interface Slug extends Base {
    _type: 'slug';
    current: string;
}

interface Block extends Base {
    _type: 'block';
    children: Span[];
    markDefs: any[];
    style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span extends Base {
    _key: string;
    _type: 'span';
    marks: string[];
    text: string;
}  

interface mainImage extends Base {
    _type: 'image';
    asset: Reference;
}

interface Title extends Base {
    _type: 'string';
    current: string;
}

interface Social extends SanityBody {
    _type: 'social';
    _id: string;
    title: string;
    url: string;
}

interface PerfilInfo extends SanityBody {
    _type: 'perfilInfo';
    name: string;
    address: string;
    email: string;
    phone: string;
    socials: Social[];
    bio: Block[];
    image: Image;
    imageProfile: Image;
}

interface Tecnology extends SanityBody {
    _type: 'skill';
    title: string;
    description: string;
    mainImage: Image;
    progress: number;
}

interface Project extends SanityBody {
    _type: 'project';
    title: string;
    description: string;
    summary: string;
    image: Image;
    tecnologies: Tecnology[];
    linkToBuild: string;
}

interface Skill extends SanityBody {
    _type: 'skill';
    _id: string;
    title: string;
    description: string;
    mainImage: Image;
    progress: number;
}

interface Experience extends SanityBody {
    _type: 'experience';
    _id: string;
    jobTitle: string;
    JobImage: Image;
    companyTitle: string;
    dateStared: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    tecnologies: Tecnology[];
    points: string[];
}