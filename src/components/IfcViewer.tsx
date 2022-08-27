import React, { useEffect, useRef } from 'react';
import { IfcViewerAPI, ViewerOptions } from 'web-ifc-viewer';

type IfcViewerProp = {
  viewerRef: {
    current: IfcViewerAPI;
  };
  wasmPath: string;
  option?: ViewerOptions;
  style?: React.CSSProperties;
};
const IfcViewer: React.FC<IfcViewerProp> = ({ viewerRef, wasmPath, option = {}, style = {} }) => {
  const containerRef = useRef<HTMLDivElement>();

  const ifcOnDoubleClick = async () => {
    if (viewerRef.current) {
      viewerRef.current.IFC.selector.highlightIfcItem();
      const item = await viewerRef.current.IFC.selector.pickIfcItem();
      if (!item) return;
      const props = await viewerRef.current.IFC.getProperties(item.modelID, item.id, true, false);
      console.log(props);
    }
  };
  const ifcOnMouseMove = async () => {
    if (viewerRef.current) {
      viewerRef.current.IFC.selector.prePickIfcItem();
    }
  };
  const ifcOnRightClick = async () => {
    if (viewerRef.current) {
      viewerRef.current.clipper.deleteAllPlanes();
      viewerRef.current.clipper.createPlane();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const viewer = new IfcViewerAPI({
      container,
      ...option,
    });
    viewer.axes.setAxes();
    viewer.grid.setGrid();
    viewer.IFC.setWasmPath(wasmPath);

    viewer.clipper.active = true;
    window.onkeydown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyC': {
          viewerRef.current.clipper.createPlane();
          break;
        }
        case 'KeyD': {
          viewerRef.current.clipper.deletePlane();
          break;
        }
        case 'Escape': {
          viewerRef.current.IFC.selector.unpickIfcItems();
          viewerRef.current.IFC.selector.unHighlightIfcItems();
          break;
        }
      }
    };
    async function loadIfc(url: string) {
      const model = await viewer.IFC.loadIfcUrl(url);
      if (!model) return;
      viewer.shadowDropper.renderShadow(model?.modelID);
    }
    loadIfc('/RST_basic_sample_project.ifc');
    viewerRef.current = viewer;
  }, [option, viewerRef, wasmPath]);

  return (
    <div
      ref={containerRef}
      onDoubleClick={ifcOnDoubleClick}
      onMouseMove={ifcOnMouseMove}
      onContextMenu={ifcOnRightClick}
      style={{
        position: 'relative',
        height: '97vh',
        width: '97vw',
        ...style,
      }}
    />
  );
};

export default IfcViewer;
