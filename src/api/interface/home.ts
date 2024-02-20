export interface fetchHomeInterface {
  organizationInfos: [
    {
      organization: string;
      repositories: [string];
    }
  ];
}
