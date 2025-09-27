# Korna-assessment
Coding assessment for korna

# Design Assumptions and Technical Decisions

## Design Assumptions

### Layout & Responsive Design
- **Desktop-first approach**: Assumed the primary use case is desktop/laptop viewing based on Medium's typical user behavior
- **Fixed sidebar width**: Set sidebar to 320px (`w-80`) assuming consistent content length and standard reading patterns

### Visual Design
- **Tailwind-first styling**: Assumed Tailwind CSS for consistent design tokens and rapid development

### User Experience
- **Hover interactions**: Added subtle hover effects on interactive elements for better feedback
- **Image fallbacks**: Implemented error handling for broken article images with graceful degradation

## Technical Decisions

### Component Architecture
- **Provider pattern**: Chose React Context for sidebar data to enable potential future features (user customization, dynamic content updates)
- **Component composition**: Separated concerns with individual components (ArticleCard, Sidebar, Header) for maintainability
- **Props spreading**: Used `{...article}` for cleaner ArticleCard usage while maintaining type safety

### State Management
- **Static data approach**: Used hardcoded arrays assuming this is a prototype; real implementation would fetch from APIs
- **No local storage**: Avoided browser storage APIs due to artifact environment limitations
- **Context over props drilling**: Prevented passing sidebar data through multiple component layers

### TypeScript Integration
- **Interface definitions**: Created explicit types for better developer experience and error catching
- **Optional properties**: Used `?` for optional props like `image` and `featured` to handle data variations
- **Generic typing**: Leveraged TypeScript for component props to ensure data integrity

### Performance Considerations
- **Key props**: Used array indices for React keys (acceptable for static data; would use unique IDs in production)
- **Minimal re-renders**: Context value is stable to prevent unnecessary sidebar re-renders
- **Image optimization**: Used Unsplash URLs with size parameters for appropriate image sizing



## Trade-offs Made

1. **Static vs Dynamic**: Chose static data for faster development but acknowledged need for API integration
2. **Bundle size vs Features**: Included Lucide React icons for better UX despite slight bundle increase
3. **Flexibility vs Simplicity**: Implemented provider pattern for future scalability despite current simplicity
4. **TypeScript complexity**: Added type definitions for better DX, accepting initial setup overhead

These decisions prioritize code maintainability, user experience, and scalability while acknowledging the prototype nature of the current implementation.