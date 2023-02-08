'use client'

import { useModals } from "../auth/modal/ModalsProvider"
import CommunityFormModal from "./CommunityFormModal";

const ShowCommunity = () => {
    const modals = useModals()

    if (!modals.showCommunity) return null;
  return (
    <div>
        <CommunityFormModal />
    </div>
  )
}

export default ShowCommunity