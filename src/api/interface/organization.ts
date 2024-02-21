export interface fetchOrganizationInterface {
  organizationInfos: [
    {
      organization: string;
      repositories: [string];
    }
  ];
}
