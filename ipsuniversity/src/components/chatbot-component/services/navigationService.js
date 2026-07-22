const routeMap = {
  // Home
  home: "/",
  homepage: "/",

  // CTM Main
  ctm: "/ipsctm",
  department: "/ipsctm",

  // CTM Sections
  hod: "/page5/hod-message",
  "hod message": "/page5/hod-message",

  faculty: "/page5/faculty",
  teachers: "/page5/faculty",

  scope: "/page5/scope",

  activity: "/page5/activity",
  activities: "/page5/activity",

  feature: "/page5/features",
  features: "/page5/features",

  testimonial: "/page5/testimonials",
  testimonials: "/page5/testimonials",

  research: "/page5/research",

  event: "/page5/events",
  events: "/page5/events",

  achievement: "/page5/achievements",
  achievements: "/page5/achievements",

  gallery: "/page5/gallery",
  photos: "/page5/gallery",
};

const navigationService = {
  getRoute(message) {
    const text = message.toLowerCase();

    for (const key in routeMap) {
      if (text.includes(key)) {
        return routeMap[key];
      }
    }

    return null;
  },
};

export default navigationService;