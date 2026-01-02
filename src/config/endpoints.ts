import { ApiEndpoint } from "../types/api";

export const endpoints: ApiEndpoint[] = [
  {
    id: "search-teams",
    name: "Search Teams",
    description: "Search for teams by name.",
    method: "GET",
    baseUrl: "https://www.thesportsdb.com/api/v1/json/3",
    path: "/searchteams.php",
    params: [
      {
        key: "t",
        label: "Team Name",
        required: true,
        example: "Detroit Pistons",
        description: "Full or partial team name to search for.",
      },
    ],
    examples: [
      {
        title: "Search NFL Team",
        params: { t: "Detroit Lions" },
      },
      {
        title: "Search Soccer Team",
        params: { t: "Arsenal" },
      },
    ],
  },
  {
    id: "team-details",
    name: "Team Details",
    description: "Retrieve detailed information about a team by its unique ID.",
    method: "GET",
    baseUrl: "https://www.thesportsdb.com/api/v1/json/3",
    path: "/lookupteam.php",
    params: [
      {
        key: "id",
        label: "Team ID",
        required: true,
        example: "134876",
        description: "Unique team identifier returned from search endpoints.",
      },
    ],
  },
  {
    id: "last-events",
    name: "Last Events",
    description: "Fetch the most recent events played by a team.",
    method: "GET",
    baseUrl: "https://www.thesportsdb.com/api/v1/json/3",
    path: "/eventslast.php",
    params: [
      {
        key: "id",
        label: "Team ID",
        required: true,
        example: "134876",
        description: "Unique team identifier for the selected team.",
      },
    ],
  },
];
