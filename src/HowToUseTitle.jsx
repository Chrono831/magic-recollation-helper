import React from 'react';

export const HowToUseTitle = props => {
  const display = props.show ? 'initial' : 'none';
  return (
    <div style={{ textAlign: 'left', display: display }}>
      <p>
        This is a tool to help you create packs usable for playing limited magic
        from your existing card pool
      </p>
      <p>Steps</p>
      <ol>
        <li>Gather cards for the set you want to collate</li>
        <li>
          Sort cards by
          <ul>
            <li>Rarity - Common, Uncommon, Rare+Mythic</li>
            <li>
              Color - White, blUe, Black, Red, Green, Colorless, Multicolor
            </li>
            <li>
              Type - Creature, Instant, Sorcery, Artifact, Enchantment, Land,
              Planeswalker
            </li>
          </ul>
        </li>
        <li>Use the "Pack Layout" section below to layout your packs</li>
      </ol>
    </div>
  );
};
