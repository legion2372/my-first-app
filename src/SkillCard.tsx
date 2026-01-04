// 这是一个独立的“技能卡片”组件
interface SkillProps {
  name: string;
  icon: string;
}

export function SkillCard({ name, icon }: SkillProps) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '5px', borderRadius: '8px' }}>
      <span>{icon}</span> <strong>{name}</strong>
    </div>
  );
}