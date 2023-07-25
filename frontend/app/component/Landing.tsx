"use client";

import React, { useContext, useEffect, useState } from "react";
import { BaseLayout, CardLayout, DisplayForm } from "../ui"
import NoteCard, { CardProps } from "../ui/NoteCard"
import { useSearchContext } from '@/context/SearchContext';
import { useUpdateContext } from "@/context/ComponentUpdateContext";

const Landing = () => {
  const { value } = useSearchContext();
  const { isUpdated } = useUpdateContext();
  const [data, setData] = useState<CardProps[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:3001/api/v1/confession?category=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setLoading(false)
      })
  }, [value, isUpdated])

  if (data.length > 0) {
    return (
      <BaseLayout>
        <DisplayForm />
        <CardLayout>
          {
            data.map((itm: CardProps) => (
              <NoteCard
                key={itm.id}
                category={itm.category}
                title={itm.title}
                body={itm.body}
                views={itm.views}
                comments={itm.comments}
              />
            ))
          }

        </CardLayout>
      </BaseLayout>
    )
  } else {
    return (
      <BaseLayout>
        <DisplayForm />
        <div className="text-center">
          <p className="font-bold dark:text-violet-500">No {value} confessions to display</p>
        </div>
      </BaseLayout>
    )
  }
}

export default Landing;