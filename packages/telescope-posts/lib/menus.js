// array containing items in the views menu
Telescope.menuItems.add("viewsMenu", [
  {
    route: 'posts_new',
    label: 'Newest',
    description: 'newest_posts'
  },
  {
    route: 'posts_top',
    label: 'Most Popular',
    description: 'most_popular_posts'
  },
  {
    route: 'posts_best',
    label: 'Top Voted',
    description: 'highest_ranked_posts_ever'
  },
  {
    route: 'posts_pending',
    label: 'Drafts',
    description: 'posts_awaiting_moderation',
    adminOnly: true
  },
  {
    route: 'posts_scheduled',
    label: 'Scheduled Drafts',
    description: 'future_scheduled_posts',
    adminOnly: true
  },
]);
