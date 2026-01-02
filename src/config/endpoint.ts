export const endpoints = [
    {
    id: "search-teams",
    name: "Search Teams",
    description: "Search teams by name",
    method: "GET",
    baseUrl: "https://www.thesportsdb.com/api/v1/json/3",
    path: "/searchteams.php",
    params: [
      {
        key: "t",
        label: "Team Name",
        required: true,
        example: "Lakers",
      },
    ],
  },
  {
    id: "team-details",
    name: "Team Details",
    description: "Get detailed information about a team by ID",
    method: "GET",
    path: "/lookupteam.php",
    params: [
      {
        key: "id",
        label: "Team ID",
        required: true,
        example: "134876",
      },
    ],
  },
]