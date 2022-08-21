import React from "react";
import axios from "axios";
import { useQuery } from "react-query";



export default function Repositories() {

  const { isLoading, isError, data, error, refetch } = useQuery(["repo"], () =>
    axios
      .get("https://api.github.com/users/eunit99/repos")
      .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data)

    return (
      <>
        {data.map(repo => {
          return (
            <>
              <ul>
                <li>
                  <a
                    href={repo.clone_url}>
                    {repo.name}
                  </a>
                </li>
              </ul>
            </>
          )
        })}
        <button type="button" onClick={refetch}>
          Fetch again
        </button>
      </>
    );
  };

