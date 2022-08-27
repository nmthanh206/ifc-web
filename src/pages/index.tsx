import { Button } from 'antd';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { IfcViewerAPI } from 'web-ifc-viewer';

import ModalCustom from '@/components/Modal';
import { useActions } from '@/hooks/useActions';
import { usePosts } from '@/hooks/usePosts';

const IfcViewer = dynamic(() => import('@/components/IfcViewer'), {
  ssr: false,
});

const Home: NextPage = () => {
  const viewerRef = useRef<IfcViewerAPI>(null);
  const modalState = useSelector<RootState, boolean>(
    (state) => state.modal.value,
  );

  const data = usePosts();
  const action = useActions();
  return (
    <div>
      <div className="space-x-6">
        <Button
          type="primary"
          onClick={() => {
            action.show();
          }}
        >
          Show
        </Button>
        <Button
          type="primary"
          onClick={() => {
            action.hide();
          }}
          className="!bg-red-500"
        >
          Hide
        </Button>
        <ModalCustom />
      </div>

      <IfcViewer viewerRef={viewerRef} wasmPath="../../../" />
    </div>
  );
};

export default Home;
