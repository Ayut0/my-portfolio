//Common types provided by Sanity
//It responses all of them
interface SanityBody{
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string
}

interface Image{
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    }
}

export interface Technology extends SanityBody{
    _type: 'skill';
    title: string;
    image: Image;
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}
export interface Skill extends SanityBody {
    _type: 'social';
    title: string;
    image: Image;
}
export interface Project extends SanityBody {
    _type: 'social';
    title: string;
    image: Image;
    summary: string;
    linkToDemo: string;
    linkToGit: string;
    technologies: Technology[]
}