export const BRAND = {
  name: "Minara",
  full: "Minara Creator Network",
  tagline: "Reach Muslim consumers through creators they trust.",
  email: "hello@minaracreators.co.uk",
  url: "https://leaflet-smart-hub.lovable.app",
};

export const CATEGORIES = [
  "Food",
  "Travel",
  "Fitness",
  "Family",
  "Fashion",
  "Beauty",
  "Lifestyle",
] as const;

export const CITIES = [
  "London",
  "Birmingham",
  "Manchester",
  "Glasgow",
  "Edinburgh",
  "Leicester",
  "Leeds",
  "Bradford",
] as const;

export const TIERS = [
  { name: "Nano", range: "1,000–10,000 followers" },
  { name: "Micro", range: "10,000–50,000 followers" },
  { name: "Mid-tier", range: "50,000–250,000 followers" },
  { name: "Large", range: "250,000+ followers" },
] as const;

export const PLATFORMS = ["Instagram", "TikTok", "YouTube"] as const;

export const AUDIENCES = [
  "Muslim women",
  "Muslim men",
  "Families",
  "Gen Z",
  "Young professionals",
  "Students",
  "Parents",
] as const;

export type DemoCreator = {
  id: string;
  name: string;
  category: (typeof CATEGORIES)[number];
  city: (typeof CITIES)[number];
  tier: "Nano" | "Micro" | "Mid-tier" | "Large";
  platforms: string[];
  audience: string[];
  note: string;
};

/** DEMO PROFILES — illustrative placeholders only. No real creator data or metrics. */
export const DEMO_CREATORS: DemoCreator[] = [
  { id: "d1", name: "Demo Profile — Food Creator", category: "Food", city: "Glasgow", tier: "Nano", platforms: ["TikTok", "Instagram"], audience: ["Muslim women", "Gen Z"], note: "Local halal restaurant reviews and city food guides." },
  { id: "d2", name: "Demo Profile — Recipe Creator", category: "Food", city: "Birmingham", tier: "Micro", platforms: ["Instagram", "YouTube"], audience: ["Families", "Parents"], note: "Weeknight family recipes and meal prep." },
  { id: "d3", name: "Demo Profile — Travel Creator", category: "Travel", city: "London", tier: "Micro", platforms: ["Instagram", "TikTok"], audience: ["Young professionals", "Muslim women"], note: "Muslim-friendly city breaks and hotel stays." },
  { id: "d4", name: "Demo Profile — Family Travel", category: "Travel", city: "Manchester", tier: "Nano", platforms: ["Instagram"], audience: ["Families", "Parents"], note: "Family holidays and travel with young children." },
  { id: "d5", name: "Demo Profile — Strength Coach", category: "Fitness", city: "London", tier: "Mid-tier", platforms: ["Instagram", "YouTube"], audience: ["Muslim men", "Gen Z"], note: "Training, boxing and nutrition content." },
  { id: "d6", name: "Demo Profile — Women's Fitness", category: "Fitness", city: "Leicester", tier: "Micro", platforms: ["TikTok", "Instagram"], audience: ["Muslim women", "Students"], note: "Modest activewear and women-only gym content." },
  { id: "d7", name: "Demo Profile — Parenting", category: "Family", city: "Bradford", tier: "Nano", platforms: ["Instagram"], audience: ["Parents", "Families"], note: "Baby products, routines and family days out." },
  { id: "d8", name: "Demo Profile — Modest Fashion", category: "Fashion", city: "London", tier: "Micro", platforms: ["Instagram", "TikTok"], audience: ["Muslim women", "Gen Z"], note: "Hijab styling, abayas and seasonal edits." },
  { id: "d9", name: "Demo Profile — Beauty & Skincare", category: "Beauty", city: "Leeds", tier: "Nano", platforms: ["TikTok"], audience: ["Muslim women", "Students"], note: "Skincare routines and honest product reviews." },
  { id: "d10", name: "Demo Profile — Lifestyle", category: "Lifestyle", city: "Manchester", tier: "Micro", platforms: ["YouTube", "Instagram"], audience: ["Young professionals"], note: "Productivity, business and everyday lifestyle." },
  { id: "d11", name: "Demo Profile — Student Life", category: "Lifestyle", city: "Edinburgh", tier: "Nano", platforms: ["TikTok"], audience: ["Students", "Gen Z"], note: "Student budgets, campus life and city eats." },
  { id: "d12", name: "Demo Profile — Café Culture", category: "Food", city: "London", tier: "Large", platforms: ["Instagram", "TikTok", "YouTube"], audience: ["Gen Z", "Young professionals"], note: "Dessert spots, cafés and launch coverage." },
];

export const SERVICES = [
  {
    slug: "creator-campaigns",
    title: "Creator Campaigns",
    summary: "End-to-end influencer campaigns, from strategy to reporting.",
    points: ["Campaign strategy", "Creator discovery", "Creator selection", "Negotiation", "Briefing", "Content coordination", "Approval management", "Campaign monitoring", "Reporting"],
    cta: "Build My Campaign",
  },
  {
    slug: "creator-sourcing",
    title: "Creator Sourcing",
    summary: "We find the creators. You manage the campaign.",
    points: ["Shortlists built to your brief", "Audience relevance checks", "Location and niche matching", "Rate guidance", "Contact facilitation"],
    cta: "Request a Shortlist",
  },
  {
    slug: "ugc",
    title: "UGC Content",
    summary: "Authentic creator content you can reuse across your marketing.",
    points: ["Organic social", "Paid social", "Website and landing pages", "Product pages", "Ads"],
    cta: "Commission UGC",
  },
  {
    slug: "ambassadors",
    title: "Brand Ambassador Programmes",
    summary: "Long-term creator partnerships instead of one-off posts.",
    points: ["Ambassador selection", "Multi-month content calendars", "Retainer structures", "Relationship management"],
    cta: "Plan an Ambassador Programme",
  },
  {
    slug: "affiliate",
    title: "Affiliate & Performance Campaigns",
    summary: "Trackable creator activity, where it suits the objective.",
    points: ["Discount codes", "Affiliate links", "Creator commissions", "Trackable conversions"],
    cta: "Discuss Performance Campaigns",
  },
  {
    slug: "paid-amplification",
    title: "Paid Amplification",
    summary: "Turn creator content into paid social assets where suitable.",
    points: ["Usage rights", "Whitelisting set-up", "Creative variants", "Ad-ready formats"],
    cta: "Amplify Creator Content",
  },
  {
    slug: "local",
    title: "Local Creator Campaigns",
    summary: "For restaurants, cafés, events, hotels and retailers.",
    points: ["City and region targeting", "Footfall-focused briefs", "In-venue visits", "Local UGC libraries"],
    cta: "Launch a Local Campaign",
  },
];

export const INDUSTRIES = [
  { slug: "food", title: "Food & Drink", blurb: "From halal restaurant launches to recipe campaigns and food-product discovery, connect with Muslim creators who make food part of their everyday content.", creators: ["Halal restaurant reviewers", "Recipe creators", "Meal prep and high-protein", "Dessert and café creators"], campaigns: ["Restaurant launch", "New menu", "Ramadan campaign", "Eid campaign", "Product launch", "Food sampling", "UGC library", "Local awareness"], cta: "Launch a Food Campaign" },
  { slug: "travel", title: "Travel & Hospitality", blurb: "Travel content made for Muslim travellers — hotels, resorts, destinations and family holidays covered by creators their audiences trust.", creators: ["Muslim-friendly travel creators", "Family travel creators", "Luxury and budget travel", "Islamic heritage content"], campaigns: ["Hotel stays", "Resort features", "Destination campaigns", "Tourism board partnerships", "Family holiday content", "Travel experiences"], cta: "Launch a Travel Campaign" },
  { slug: "fitness", title: "Fitness & Sports", blurb: "Connect with the next generation of active Muslim consumers across gym, combat sports, running and nutrition.", creators: ["Gym and strength creators", "Boxing and MMA", "Running and calisthenics", "Women's fitness", "Nutrition and wellness"], campaigns: ["Sportswear launches", "Gym memberships", "Equipment reviews", "Nutrition product campaigns", "App sign-ups", "Ambassador programmes"], cta: "Launch a Fitness Campaign" },
  { slug: "family", title: "Family & Parenting", blurb: "Reach Muslim families through creators who document real family life, from baby products to days out and education.", creators: ["Parenting creators", "Family lifestyle", "Education and learning", "Home and family"], campaigns: ["Baby product launches", "Family attractions", "Education services", "Seasonal gifting", "UGC reviews"], cta: "Launch a Family Campaign" },
  { slug: "fashion", title: "Modest Fashion", blurb: "Modest fashion is a fast-moving, style-led space. Work with creators who set the tone for their communities.", creators: ["Hijab styling", "Abaya and occasionwear", "Modest activewear", "Accessories"], campaigns: ["Collection launches", "Seasonal edits", "Eid campaigns", "Try-on content", "Affiliate campaigns"], cta: "Launch a Fashion Campaign" },
  { slug: "beauty", title: "Beauty & Wellness", blurb: "Skincare, makeup and wellness campaigns with creators who review honestly and keep their audience's trust.", creators: ["Skincare creators", "Makeup creators", "Wellness and self-care"], campaigns: ["Product launches", "Routine content", "Sampling programmes", "Before/after series", "Retail support"], cta: "Launch a Beauty Campaign" },
  { slug: "lifestyle", title: "Lifestyle & Technology", blurb: "Apps, services, finance and consumer tech, delivered through everyday Muslim lifestyle content.", creators: ["Personal development", "Business and productivity", "Student lifestyle", "Home and tech"], campaigns: ["App installs", "Service sign-ups", "Explainer content", "Long-term ambassadors"], cta: "Launch a Lifestyle Campaign" },
];

export const BRAND_FAQS = [
  { q: "What is Muslim creator marketing?", a: "Working with creators whose content and communities genuinely reflect Muslim audiences, so brand messages arrive through a voice the audience already trusts." },
  { q: "Why should I work with Muslim creators?", a: "If Muslim consumers are part of your market, creators from within those communities understand the context, the calendar and the language that lands." },
  { q: "How do you select creators?", a: "We start from your objective, audience and location, then assess relevance, engagement, average views, content quality, brand fit, previous collaborations and reliability." },
  { q: "Do you only work with Muslim creators?", a: "Our specialism is the Muslim lifestyle creator ecosystem. Where a campaign genuinely calls for wider creators, we will say so." },
  { q: "Can you find creators in specific UK cities?", a: "Yes. Location matching is a core part of how we build shortlists, including city and regional briefs." },
  { q: "Do you work with nano and micro influencers?", a: "Yes, and it is a particular focus. Smaller creators often bring closer community relationships and local relevance." },
  { q: "How much does a campaign cost?", a: "It depends on creator tier, number of creators, deliverables, usage rights, duration, production, travel and any paid amplification. We quote against your brief." },
  { q: "Can you manage the entire campaign?", a: "Yes — strategy, selection, negotiation, briefing, approvals, monitoring and reporting." },
  { q: "Can you provide UGC?", a: "Yes. We can commission creator content specifically for reuse across your own channels, subject to agreed usage rights." },
  { q: "Can creators post on TikTok and Instagram?", a: "Yes, and YouTube where relevant. Platform choice follows the objective and the creator's strongest format." },
  { q: "Can you arrange long-term ambassadors?", a: "Yes. Ambassador programmes are often better value than repeated one-off posts." },
  { q: "Can you run affiliate campaigns?", a: "Where appropriate, using discount codes, affiliate links and creator commissions." },
  { q: "Can I choose the creators?", a: "Always. We recommend and explain the reasoning; final approval sits with you." },
  { q: "How do you measure results?", a: "We agree the metrics that fit the campaign up front and report against them. We only report metrics the platforms and tracking actually provide." },
  { q: "How quickly can a campaign launch?", a: "It depends on creator availability, approvals and production needs. We will give you a realistic timeline with your recommendations." },
  { q: "Do you work with restaurants?", a: "Yes. Local food campaigns with several trusted city creators are one of our most common briefs." },
  { q: "Do you work with travel brands?", a: "Yes — hotels, resorts, agencies, tourism boards and travel experiences." },
  { q: "Do you work with sports and fitness brands?", a: "Yes, including sportswear, equipment, gyms, nutrition and fitness apps." },
  { q: "Do you work with brands outside the UK?", a: "Yes, where the target audience includes UK Muslim consumers or our creators fit the campaign." },
];

export const CREATOR_FAQS = [
  { q: "How do I join?", a: "Complete the creator application. It takes a few minutes and helps us match you to relevant briefs." },
  { q: "Is joining free?", a: "Yes. Joining the network is free for creators." },
  { q: "How are creators selected?", a: "Applications are reviewed manually. We look at content quality, audience relevance, consistency and professionalism — not follower count alone." },
  { q: "How do I get paid?", a: "Payment terms are agreed per campaign, in writing, before content is produced." },
  { q: "How are campaigns offered?", a: "We contact you when a brief matches your niche, audience and location. You are free to decline." },
  { q: "Do I need a minimum number of followers?", a: "No fixed minimum. Nano creators are actively welcome." },
  { q: "Can nano creators join?", a: "Yes — nano and micro creators are a core part of the network." },
  { q: "Can I work with other agencies?", a: "Yes, unless a specific campaign includes an agreed exclusivity period." },
  { q: "Do I need to be Muslim?", a: "Our network focuses on creators who authentically reach Muslim audiences. Most of our creators are Muslim; relevance to the audience is what matters." },
  { q: "What niches are accepted?", a: "Food, travel, fitness, family, modest fashion, beauty, wellness and general lifestyle." },
  { q: "Can I offer UGC?", a: "Yes. Tell us in your application if you produce content for brand-owned channels." },
  { q: "Can I work with international brands?", a: "Yes, where the brief fits your audience." },
  { q: "How does advertising disclosure work?", a: "Paid and gifted collaborations must be clearly labelled as advertising. We remind creators and brands of this on every campaign." },
  { q: "How do usage rights work?", a: "Any reuse of your content by a brand is agreed in advance, including duration and channels." },
];

export const INSIGHTS = [
  { title: "How brands can authentically reach Muslim consumers in the UK", topic: "Strategy" },
  { title: "Why micro-influencers matter for Muslim marketing", topic: "Creators" },
  { title: "How to choose the right Muslim influencer", topic: "Creators" },
  { title: "Muslim influencer marketing in the UK: a practical guide", topic: "Guide" },
  { title: "How halal restaurants can use TikTok to attract customers", topic: "Food" },
  { title: "How food brands can work with Muslim creators", topic: "Food" },
  { title: "Muslim-friendly travel influencer campaigns", topic: "Travel" },
  { title: "How to measure influencer marketing ROI", topic: "Measurement" },
  { title: "Nano vs micro influencers: which is right for your campaign?", topic: "Creators" },
  { title: "How creators can get paid brand collaborations", topic: "For creators" },
  { title: "How to disclose sponsored content correctly in the UK", topic: "Compliance" },
  { title: "Ramadan influencer marketing guide", topic: "Seasonal" },
  { title: "Eid marketing campaigns with Muslim creators", topic: "Seasonal" },
  { title: "Muslim travel creators in the UK", topic: "Travel" },
  { title: "Muslim fitness creators and sports marketing", topic: "Fitness" },
];
