import * as React from "react";
import Box from "@mui/material/Box";
import Content from "./Content";
import SideNav from "./SideNav";
import Toolbar from "@mui/material/Toolbar";

export default function Page() {
  return (
    <Box sx={{ display: "flex" }} className="bg-[#f5eceb]">
      <SideNav />

      <div>
        <Toolbar />
        <h1 className="grid justify-items-center text-3xl font-medium text-gray-800 underline ">
          React
        </h1>
        <Content
          question="Lorem, ipsum dolor sit"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quidem animi laboriosam repellat iusto nisi laudantium harum sed incidunt hic qui magnam culpa nesciunt ipsum quae doloremque quia nam, rem voluptas doloribus cum similique fugiat! Facilis voluptates illum accusantium. Maxime, quae error aliquid cum velit assumenda quo illo officia earum corrupti reiciendis laborum odit eum dolores iste. Quisquam nostrum enim suscipit ratione nesciunt, quidem magni inventore, amet maiores natus alias aperiam beatae error iste. Et aliquam consequatur nesciunt tempore incidunt adipisci, rem nulla perspiciatis non assumenda repellat recusandae facere molestiae quibusdam aliquid. Adipisci blanditiis illum incidunt, doloribus quisquam facere architecto. Tempore corporis dicta, quis soluta facere eveniet vero ex excepturi quos amet nostrum dolor fugit nihil non reprehenderit maxime quaerat laudantium molestias aliquam, totam doloremque! Est magnam iure reprehenderit hic rem. Aut maxime a consequatur voluptas excepturi id minus repellendus doloremque nam maiores quis corporis dignissimos, optio illum nostrum assumenda porro ipsum consequuntur tempore adipisci! Obcaecati facilis ex deleniti illo neque eveniet fugit commodi, atque dignissimos sint consequuntur nisi laborum quia? Optio, soluta. Soluta ducimus beatae harum consequatur. Unde, dolore libero voluptatibus officia iusto blanditiis tenetur deserunt! Sequi odio iusto aperiam dolorum eos vero consectetur consequuntur. Tempora recusandae assumenda doloribus!"
        />
        <Content
          question="Lorem, ipsum dolor sit"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quidem animi laboriosam repellat iusto nisi laudantium harum sed incidunt hic qui magnam culpa nesciunt ipsum quae doloremque quia nam, rem voluptas doloribus cum similique fugiat! Facilis voluptates illum accusantium. Maxime, quae error aliquid cum velit assumenda quo illo officia earum corrupti reiciendis laborum odit eum dolores iste. Quisquam nostrum enim suscipit ratione nesciunt, quidem magni inventore, amet maiores natus alias aperiam beatae error iste. Et aliquam consequatur nesciunt tempore incidunt adipisci, rem nulla perspiciatis non assumenda repellat recusandae facere molestiae quibusdam aliquid. Adipisci blanditiis illum incidunt, doloribus quisquam facere architecto. Tempore corporis dicta, quis soluta facere eveniet vero ex excepturi quos amet nostrum dolor fugit nihil non reprehenderit maxime quaerat laudantium molestias aliquam, totam doloremque! Est magnam iure reprehenderit hic rem. Aut maxime a consequatur voluptas excepturi id minus repellendus doloremque nam maiores quis corporis dignissimos, optio illum nostrum assumenda porro ipsum consequuntur tempore adipisci! Obcaecati facilis ex deleniti illo neque eveniet fugit commodi, atque dignissimos sint consequuntur nisi laborum quia? Optio, soluta. Soluta ducimus beatae harum consequatur. Unde, dolore libero voluptatibus officia iusto blanditiis tenetur deserunt! Sequi odio iusto aperiam dolorum eos vero consectetur consequuntur. Tempora recusandae assumenda doloribus!"
        />
        <Content
          question="Lorem, ipsum dolor sit"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quidem animi laboriosam repellat iusto nisi laudantium harum sed incidunt hic qui magnam culpa nesciunt ipsum quae doloremque quia nam, rem voluptas doloribus cum similique fugiat! Facilis voluptates illum accusantium. Maxime, quae error aliquid cum velit assumenda quo illo officia earum corrupti reiciendis laborum odit eum dolores iste. Quisquam nostrum enim suscipit ratione nesciunt, quidem magni inventore, amet maiores natus alias aperiam beatae error iste. Et aliquam consequatur nesciunt tempore incidunt adipisci, rem nulla perspiciatis non assumenda repellat recusandae facere molestiae quibusdam aliquid. Adipisci blanditiis illum incidunt, doloribus quisquam facere architecto. Tempore corporis dicta, quis soluta facere eveniet vero ex excepturi quos amet nostrum dolor fugit nihil non reprehenderit maxime quaerat laudantium molestias aliquam, totam doloremque! Est magnam iure reprehenderit hic rem. Aut maxime a consequatur voluptas excepturi id minus repellendus doloremque nam maiores quis corporis dignissimos, optio illum nostrum assumenda porro ipsum consequuntur tempore adipisci! Obcaecati facilis ex deleniti illo neque eveniet fugit commodi, atque dignissimos sint consequuntur nisi laborum quia? Optio, soluta. Soluta ducimus beatae harum consequatur. Unde, dolore libero voluptatibus officia iusto blanditiis tenetur deserunt! Sequi odio iusto aperiam dolorum eos vero consectetur consequuntur. Tempora recusandae assumenda doloribus!"
        />
      </div>
    </Box>
  );
}
