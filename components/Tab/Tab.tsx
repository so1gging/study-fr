import { createContext, PropsWithChildren, useState } from 'react'

interface TabProps {
  selectedValue: string
}

const TabContext = createContext<string | null>(null)

function Tabs({ children }: PropsWithChildren) {
  const [selectItem, setSelectItem] = useState(0)

  return <TabContext.Provider value={selectItem}>{children}</TabContext.Provider>
}

function List() {
  return <></>
}

Tabs.List = List

export default Tabs
