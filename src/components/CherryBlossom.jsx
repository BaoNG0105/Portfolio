// filepath: src/components/CherryBlossom.jsx
import { useEffect } from 'react';

const CherryBlossom = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://web.nvnstatic.net/js/events/newyear.js';
    script.async = true;

    document.body.appendChild(script);

    // Hàm dọn dẹp khi component bị unmount
    return () => {
      document.body.removeChild(script);
      // Script này tạo ra một canvas, chúng ta cần xóa nó đi
      const canvas = document.getElementById('myCanvas');
      if (canvas) {
        document.body.removeChild(canvas);
      }
    };
  }, []); // Mảng rỗng đảm bảo effect chỉ chạy một lần

  return null; // Component này không render gì cả
};

export default CherryBlossom;