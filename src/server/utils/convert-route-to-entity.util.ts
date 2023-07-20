const mapping: Record<string, string> = {
  companies: 'company',
  members: 'member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
