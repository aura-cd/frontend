export interface fetchHomeInterface {
  organizationInfo: [
    {
      organization: string;
      repositories: [string];
    }
  ];
}
