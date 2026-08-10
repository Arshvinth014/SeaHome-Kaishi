/** True when the active route is the Seahome Real Estates embed page. */
export function isSeahomeRealEstatesRoute(pathname: string, hash: string): boolean {
  return (
    pathname === '/seahome-real-estates' ||
    pathname.startsWith('/seahome-real-estates/') ||
    /#\/seahome-real-estates(\/|$)/.test(`${pathname}${hash}`)
  );
}
